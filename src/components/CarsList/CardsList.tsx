import React, { useCallback, useEffect, useState } from "react";
import { Pagination, Dialog } from "../common";
import { useFetch } from "../../hooks";
import { getCarsData } from "../../api/cars";
import { CardItem, CardsFilter, CardDetails } from "..";
import { Card } from "../../interfaces/cards";
import { useStyles } from "./CardsList.styles";
import { CardsListSkeleton } from "./CardsListSkeleton";
import { cardPerPage } from "../../constants";

const colorsList = ["Red", "Blue", "Black", "White", "Green"];
export const CardsList: React.FC = () => {
  const classes = useStyles();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({} as Card);
  const [currentPage, setCurrentPage] = useState(1);
  const [colorValues, setColorValues] = useState<Set<string>>(
    new Set(colorsList)
  );
  const [radio, setRadio] = useState("or");

  const [
    {
      isFetching,
      isSuccess,
      data: { cards, headers },
    },
    fetchData,
  ] = useFetch(getCarsData);

  const handlePaginationChange = useCallback(
    (_, page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const handleFilterChange = useCallback(
    ({ radio: newRadio, colors }: { colors: Set<string>; radio: string }) => {
      setRadio(newRadio);
      setColorValues(colors);
      setCurrentPage(1);
      /*
      setCurrentPage(1);
      const queryColor = radio === "or" ? colors.join("|") : colors.join(",");
      console.log({ queryColor });
      fetchData({ query: { colors: `${queryColor}`, pageSize: cardPerPage } });
      */
    },
    [setCurrentPage, setRadio, setColorValues]
  );

  useEffect(() => {
    const queryColor = Array.from(colorValues).join(radio === "or" ? "|" : ",");
    fetchData({
      query: {
        colors: `${queryColor}`,
        pageSize: cardPerPage,
        page: currentPage,
      },
    });
  }, [colorValues, radio, currentPage, fetchData]);

  const onModalClose = useCallback(() => {
    setDialogIsOpen(false);
    // setCardDetails({} as Card);
  }, [setDialogIsOpen]);
  const openModal = useCallback(
    (card: Card) => {
      setDialogIsOpen(true);
      setCardDetails(card);
    },
    [setDialogIsOpen, setCardDetails]
  );
  return (
    <section className={classes.wrapper}>
      <CardsFilter
        onChange={handleFilterChange}
        colors={colorsList}
        isFetching={isFetching}
        colorValues={colorValues}
        radio={radio}
      />
      {isFetching ? (
        <CardsListSkeleton />
      ) : (
        <ul className={classes.list}>
          {cards &&
            cards.map((card: Card) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <li key={card.id} onClick={() => openModal(card)}>
                <CardItem rarity={card.rarity} imageUrl={card.imageUrl} />
              </li>
            ))}
        </ul>
      )}
      <Pagination
        page={currentPage}
        disabled={isFetching}
        count={headers?.["total-count"]}
        color="primary"
        onChange={handlePaginationChange}
      />
      {isSuccess && (
        <Dialog
          aria-labelledby="simple-dialog-title"
          maxWidth="md"
          fullWidth
          open={dialogIsOpen}
          onClose={onModalClose}
        >
          <CardDetails card={cardDetails} onClose={onModalClose} />
        </Dialog>
      )}
    </section>
  );
};
