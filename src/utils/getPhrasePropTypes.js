import PropTypes from "prop-types";

export default function getPhrasePropTypes(phrases) {
  return Object.keys(phrases).reduce(
    (phrases, key) => ({
      ...phrases,
      [key]: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.node
      ])
    }),
    {}
  );
}
