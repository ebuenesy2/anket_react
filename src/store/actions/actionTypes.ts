export const UserToken = "UserToken";
export const UserOnay = "UserOnay";

export function userToken_Update (token: any) {
    return { type:"Token", payload: token , error: false }
}