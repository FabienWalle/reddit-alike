import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import { db } from "./db"
import GitHub from "next-auth/providers/github"

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

if (!GITHUB_CLIENT_SECRET || !GITHUB_CLIENT_ID) {
    throw new Error('Missing github oauth credentials')
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GitHub({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        // prevents nextauth bug
        async session({ session, user }) {
            if (session && user) {
                session.user.id = user.id
            }
            return session
        }
    }
})
