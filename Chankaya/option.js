'use strict';

const Joi = require('joi');
const { Model } = require('./helpers');

module.exports = class Options extends Model {

    static get tableName() {

        return 'options';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            correct_answer: Joi.string().required(),
            questionId: Joi.number().integer().greater(0)
        });
    }
    
    static get relationMappings() {
    
    const User = require('./question');


        return {
            questions: {
                relation: Model.BelongsToOneRelation,
                modelClass: Question,
                join: {
                    from: 'option.questionId',
                    to: 'questions.id'
                }
            }
        };
};
