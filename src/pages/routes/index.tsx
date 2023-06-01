import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {MainPageLayout} from '../layouts/MainPagelayout';
import ErrorPage from '../PagesContainers/ErrorPage';
import {HomePage} from '../PagesContainers/HomePage';
import NotFoundPage from '../PagesContainers/NotFoundPage';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);

