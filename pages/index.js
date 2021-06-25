import Head from 'next/head'
import { Board } from "../components/Board"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>TicTacToe</title>
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <Board />
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                TGT 2021
            </footer>
        </div>
    )
}
