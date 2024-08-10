using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiListaDeCompra.Items
{
    public class ItemsModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

        [BsonElement("descricao")]
        [BsonRepresentation(BsonType.String)]
        public string Descricao { get; set; }

        [BsonElement("valor")]
        [BsonRepresentation(BsonType.Int32)]
        public int Valor { get; set; }

        [BsonElement("tipo")]
        [BsonRepresentation(BsonType.String)]
        public EntradaOuSaida Tipo { get; set; }
    }

    public enum EntradaOuSaida
    {
        Entrada,
        Saida
    }

}
