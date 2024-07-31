import sql from 'mssql';

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
}

export const createUser = async (user: Omit<IUser, 'id'>): Promise<IUser> => {
    try {
        const result = await sql.query`
            INSERT INTO TaiKhoan (TenDangNhap, Email, MatKhau)
                OUTPUT INSERTED.Id
            VALUES (${user.username}, ${user.email}, ${user.password})
        `;
        console.log('Create user result:', result);
        return { id: result.recordset[0].Id, username: user.username, email: user.email, password: user.password };
    } catch (error) {
        console.error('Create user error:', error);
        throw error;
    }
};

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
        const result = await sql.query`SELECT * FROM TaiKhoan WHERE Email = ${email}`;
        // console.log('Find user by email result:', result);
        if (result.recordset.length === 0) return null;
        const dbUser = result.recordset[0];
        return {
            id: dbUser.Id,
            username: dbUser.TenDangNhap,
            email: dbUser.Email,
            password: dbUser.MatKhau  // Return as password to be used in login function
        };
    } catch (error) {
        console.error('Find user by email error:', error);
        throw error;
    }
};
