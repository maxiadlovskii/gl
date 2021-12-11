import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  image: ({
    isLoaded,
    src,
    width = "100%",
    isError,
  }: {
    isLoaded: boolean;
    src: string;
    width?: number | string;
    isError: boolean;
  }) => {
    const url = isError ? "/images/no-image.jpg" : src;
    return {
      paddingTop: "139%", // 16:9,
      width,
      position: "relative",
      backgroundImage: isLoaded ? `url(${url})` : "none",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  },
  loader: {
    position: "absolute",
    width: "100%",
    top: 0,
    height: "100%",
  },
}));
