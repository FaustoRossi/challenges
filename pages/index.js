import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button } from "@material-tailwind/react";
import { TbNumbers } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";

export default function Home() {
	return (
		<div className="h-screen w-screen flex items-center justify-center bg-gray-300">
			<div className="flex  gap-10">
				<Link href="/bingo">
					<Button variant="gradient" color="indigo" className="flex">
						<TbNumbers className="mx-1" size={20} />
						<a className={styles.btn}>Consigna 1: Bingo</a>
					</Button>
				</Link>

				<Link href="/form">
					<Button variant="gradient" color="indigo" className="flex">
						<CgFileDocument className="mx-2 " size={20} />
						<a className={styles.btn}>Consigna 2: Formulario</a>
					</Button>
				</Link>
			</div>
		</div>
	);
}
