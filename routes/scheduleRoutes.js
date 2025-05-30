const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Получение расписания для студента
router.get('/student/:studentId', scheduleController.getScheduleByStudentId);

// Получение расписания для группы
router.get('/group/:groupId', scheduleController.getScheduleByGroupId);

// Получение расписания для группы со списком студентов
router.get('/group/:groupId/with-students', scheduleController.getGroupScheduleWithStudents);

// Добавление нового занятия
router.post('/', scheduleController.addScheduleItem);

// Обновление посещаемости (универсальное)
router.put('/:id/updateAttendance', scheduleController.updateAttendance);

// Массовое обновление посещаемости для группы
router.put('/:id/updateGroupAttendance', scheduleController.updateGroupAttendance);

// Обновление занятия
router.put('/:id', scheduleController.updateScheduleItem);

// Удаление занятия
router.delete('/:id', scheduleController.deleteScheduleItem);

// Массовое удаление занятий
router.post('/deleteMultiple', scheduleController.deleteMultipleScheduleItems);

module.exports = router;