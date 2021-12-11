import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { CardItem, CardsFilter, CardDetails } from "../components";
import { CardsList } from "../components/CarsList/CardsList";

import { card } from "./moks";
import { routes } from "../constants/routes";
import { colorsList } from "../constants";

const history = createMemoryHistory();
const route = routes.cardList;
history.push(route);

test("Render CardItem", () => {
  const { container } = render(
    <Router history={history}>
      <CardItem imageUrl={card.imageUrl} rarity={card.rarity} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CardsFilter", () => {
  const { container } = render(
    <Router history={history}>
      <CardsFilter
        colors={colorsList}
        onChange={() => null}
        isFetching={false}
        radio="or"
        cardName=""
        colorValues={new Set(colorsList)}
      />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CardsList", () => {
  const { container } = render(
    <Router history={history}>
      <CardsList />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CardDetails", () => {
  const { container } = render(
    <Router history={history}>
      <CardDetails card={card} onClose={() => {}} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
