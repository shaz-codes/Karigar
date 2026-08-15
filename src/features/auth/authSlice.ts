import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base = import.meta.env.VITE_API_URL;

export type User = {
	_id: string;
	name: string;
	email: string;
};

type AuthState = {
	user: User | null;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
	checkedAuth: boolean;
};

const initialState: AuthState = {
	user: null,
	status: "idle",
	error: null,
	checkedAuth: false,
};

type Credentials = {
	email: string;
	password: string;
	remember?: boolean;
	role: "user" | "craftsperson" | "admin";
};

type SignupInfo = {
	name: string;
	email: string;
	role: "user" | "craftsperson" | "admin";
	password: string;
};

async function extractError(res: Response, fallback: string) {
	try {
		const data = await res.json();
		return data?.error || fallback;
	} catch {
		return fallback;
	}
}

export const loginUser = createAsyncThunk(
	"auth/login",
	async (credentials: Credentials, { rejectWithValue }) => {
		const res = await fetch(`${base}/api/user/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify(credentials),
		});
		if (!res.ok) {
			return rejectWithValue(await extractError(res, "Login failed"));
		}
		return await fetchCurrentUserData();
	},
);

export const signupUser = createAsyncThunk(
	"auth/signup",
	async (info: SignupInfo, { rejectWithValue }) => {
		const res = await fetch(`${base}/api/user/signup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify(info),
		});
		if (!res.ok) {
			return rejectWithValue(await extractError(res, "Signup failed"));
		}
		return await fetchCurrentUserData();
	},
);

async function fetchCurrentUserData(): Promise<User> {
	const res = await fetch(`${base}/api/user/me`, {
		credentials: "include",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch current user");
	}
	const data = await res.json();
	return data.user as User;
}

export const fetchCurrentUser = createAsyncThunk(
	"auth/fetchCurrentUser",
	async (_: void, { rejectWithValue }) => {
		try {
			return await fetchCurrentUserData();
		} catch (err) {
			return rejectWithValue((err as Error).message);
		}
	},
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
	await fetch(`${base}/api/user/logout`, {
		method: "POST",
		credentials: "include",
	});
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
				state.checkedAuth = true;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = (action.payload as string) ?? "Login failed";
			})
			.addCase(signupUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(signupUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
				state.checkedAuth = true;
			})
			.addCase(signupUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = (action.payload as string) ?? "Signup failed";
			})
			.addCase(fetchCurrentUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCurrentUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
				state.checkedAuth = true;
			})
			.addCase(fetchCurrentUser.rejected, (state) => {
				state.status = "idle";
				state.user = null;
				state.checkedAuth = true;
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.user = null;
				state.status = "idle";
			});
	},
});

export default authSlice.reducer;
