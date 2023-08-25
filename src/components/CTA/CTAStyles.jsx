const CTAStyles = {
  CTA_Container: {
    position: "relative",
    width: { xs: "90%", lg: "100%" },
    color: "white",
    textAlign: "center",
    borderRadius: "12px",
    bgcolor: "var(--primaryColor)",
    padding: { xs: "60px 20px", sm: "80px 50px", lg: "72px  242px" },
  },

  bgEllipse: {
    borderRadius: "12px",
    position: "absolute",
    height: 260,
    width: 732,
    maxWidth: "100%",
    zindex: 50,
    right: 0,
    top: 0,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },

  inputField: {
    position: "relative",
    zIndex: 100,
    marginTop: "48px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};


export {CTAStyles}
