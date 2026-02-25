const express = require('express');
const router = express.Router();
const { 
    getBooks, addSection, updateSection, deleteSection, 
    updateSectionsOrder, saveBook, deleteBookFromSection
} = require('../controllers/bookController');

router.get('/', getBooks);
router.post('/sections', addSection);
router.put('/sections/order', updateSectionsOrder);
router.put('/sections/:id', updateSection);
router.delete('/sections/:id', deleteSection);
router.post('/sections/:sectionId/items', saveBook);
router.delete('/sections/:sectionId/items/:bookId', deleteBookFromSection);

module.exports = router;
