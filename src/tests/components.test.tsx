import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { CardItem, CardsFilter } from "../components";
import { CardsList } from "../components/CarsList/CardsList";

import { car, colors, manufacturers } from "./moks";
import { routes } from "../constants/routes";

const history = createMemoryHistory();
const route = routes.cardList;
history.push(route);

const {
  manufacturerName,
  modelName,
  pictureUrl,
  fuelType,
  color: carColor,
  stockNumber,
  mileage,
} = car;

test("Render CarItem", () => {
  const { container } = render(
    <Router history={history}>
      <CardItem
        stockNumber={stockNumber}
        mileage={mileage}
        fuelType={fuelType}
        color={carColor}
        manufacturerName={manufacturerName}
        modelName={modelName}
        pictureUrl={pictureUrl}
      />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CarsFilter", () => {
  const { container } = render(
    <Router history={history}>
      <CardsFilter
        colors={colors}
        manufacturers={manufacturers}
        onChange={() => null}
        isFetching={false}
      />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CarsList", () => {
  const { container } = render(
    <Router history={history}>
      <CardsList />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
