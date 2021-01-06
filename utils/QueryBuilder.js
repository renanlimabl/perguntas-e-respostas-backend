const QueryBuilder = {
  createQuery: (table_name, ...columns) => {
    // columns
    const textValues = [...columns].join(',');

    // create numbers of values for the query ex: $1, $2...
    let numbersOfValues = [];
    for (let i = 1; i <= [...columns].length; i++) {
      numbersOfValues.push(`$${i}`)
    }
    numbersOfValues.join(',')


    return `INSERT INTO ${table_name}(${textValues}) VALUES(${numbersOfValues}) RETURNING *`
  },
  queryGet: (table_name) => {
    return `SELECT * FROM ${table_name} ORDER BY id DESC`
  },
}

module.exports = QueryBuilder;