import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { ErrorPage } from '../ErrorPage';
import HomePage from '../HomePage';
import { MainPageLayout } from '../layouts/MainPageLayout';
import { NotFoundPage } from '../NotFoundPage';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout/>} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);


