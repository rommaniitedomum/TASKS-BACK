const router = require("express").Router(); // express 모듈에서 Router 클래스 임포트
const { updateTask } = require("../controller/updateTaskCtrl");

router.put("/updateTask", updateTask);

module.exports = router;
