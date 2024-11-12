const database = require("../database/database");

exports.updateTask = async (request, response) => {
  const { title, description, date, isCompleted, isImportant, id } =
    request.body;
  console.log(title, description, date, isCompleted, isImportant, id); // body에 요청한 데이터 확인용 코드

  try {
    await database.pool.query(
      "UPDATE tasks SET title = $1, description = $2, date = $3, isCompleted = $4, isImportant = $5 WHERE _id = $6",
      [title, description, date, isCompleted, isImportant, id]
    );

    return response.status(201).json({ msg: "데이터가 입력되었습니다." });
  } catch (error) {
    return response.status(500).json({ msg: "데이터 입력 에러: " + error });
  }
};
