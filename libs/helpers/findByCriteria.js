const findByCriteria = async (criteria) => {
  const { model, queryType, options } = criteria;
  try {
    return await model[queryType](options);
  } catch (error) {
    console.error("Error executing criteria: ", error);
    throw error;
  }
};

export default findByCriteria;
