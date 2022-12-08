import React, { useState } from "react";
import { useEffect } from "react";
import { UseFetch } from "../hooks/UseFetch";
import { Metric } from "./Metric";

export const Metrics = () => {

	const [state, setState] = useState({
		products: {
			title: "Total productos",
			icon: "fa-boxes",
			value: 0,
			color: "primary"
		},
		users: {
			title: "Usuarios registrados",
			icon: "fa-users",
			value: 0,
			color: "success"
		},
		categories: {
			title: "Categorías",
			icon: "fa-folder",
			value: 0,
			color: "warning"
		}
	})

	useEffect(() => {

		UseFetch('/totals')
		.then(({data}) => {
			setState({
				products : {
					...state.products,
					value : data.totalProducts
				},
				products : {
					...state.users,
					value : data.totalUsers
				},
				products : {
					...state.categories,
					value : data.totalCategories
				}
			})
		}).catch(error => console.error)
		   
	}, [])


  return (
    <div className="row">
      <Metric {...state.products}/>
      <Metric {...state.users}/>
      <Metric {...state.categories}/>
    </div>
  );
};
