export default eventHandler( event => {
    return {name:"user", id:event.context.params.id};
})