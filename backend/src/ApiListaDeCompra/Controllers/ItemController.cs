using ApiListaDeCompra.Data;
using ApiListaDeCompra.Items;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace ApiListaDeCompra.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IMongoCollection<ItemsModel> _items;

        public ItemController(MongoDbService mongoDbService)
        {
            _items = mongoDbService.Database.GetCollection<ItemsModel>("items");
        }

        [HttpGet]
        public async Task<IEnumerable<ItemsModel>> Get()
        {
            return await _items.Find(FilterDefinition<ItemsModel>.Empty).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> Post(ItemsModel items)
        {
            items.Id = ObjectId.GenerateNewId().ToString();
            await _items.InsertOneAsync(items);
            return CreatedAtAction(nameof(Get), new { id = items.Id }, items);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var itemToDelete = Builders<ItemsModel>.Filter.Eq(x => x.Id, id);
            await _items.DeleteOneAsync(itemToDelete);
            return Ok();
        }
    }
}
