"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./dashboard.module.css";
import { notFound } from "next/navigation";

const Dashboard = () => {
	// ! UseEffect is not recommended as library such as ReactQuery already provides states such as error, loading and we can mutate data
	// const [data, setData] = useState([]);
	// const [error, setError] = useState(false);
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		setLoading(true);
	// 		const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: "no-store" });
	// 		if (!res.ok) {
	// 			setError(true);
	// 		}
	// 		const final = await res.json();

	// 		setData(final);
	// 		setLoading(false);
	// 	};
	// 	getData();
	// }, []);
	const fetcher = (url) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

	console.log(data);

	return <div>Dashboard</div>;
};

export default Dashboard;
