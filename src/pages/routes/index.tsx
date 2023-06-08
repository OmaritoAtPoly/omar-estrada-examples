import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {MainPageLayout} from '../layouts/MainPagelayout';
import {BetfinalPage} from '../PagesContainers/BetfinalPage';
import {CosmoswinPage} from '../PagesContainers/Cosmoswin';
import ErrorPage from '../PagesContainers/ErrorPage';
import {HomePage} from '../PagesContainers/HomePage';
import NotFoundPage from '../PagesContainers/NotFoundPage';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path='betfinal' element={<BetfinalPage />} />
			<Route path='cosmoswin' element={<CosmoswinPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);

