// App Imports
import models from '../../models';

// Get thoughts by ID
export async function getById(parentValue: any, args: any) {
    return await models.Thought.findOne({ where: { id: args.id }})
}

// Get all thoughts
export async function getAll() {
    return await models.Thought.findAll()
}

// Create thought
export async function create(parentValue: any, args: any) {
    return await models.Thought.create({
        name: args.name,
        thought: args.thought
    })
}

// Delete thought
export async function remove(parentValue: any, args: any) {
    return await models.Thought.destroy({ where: { id: args.id }})
}