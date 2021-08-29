using System.Collections.Generic;

namespace Domain.Entity
{
    public class Recipe
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CookingTime { get; set; }
        public int PersonCount { get; set; }
        public int Favourites { get; set; }
        public string Photo { get; set; }
        public int Likes { get; set; }
        public List<Step> Steps { get; set; }
        public List<Tag> Tags { get; set; }
        public List<Ingredient> Ingredients { get; set; }

        public Recipe() { }

        public Recipe( int id, string name, string description, int cookingTime, int personCount, int favourites, string photo, int likes )
        {
            Id = id;
            Name = name;
            Description = description;
            CookingTime = cookingTime;
            PersonCount = personCount;
            Favourites = favourites;
            Photo = photo;
            Likes = likes;
        }

        public void CopyFrom( Recipe recipe )
        {
            Name = recipe.Name;
            Description = recipe.Description;
            CookingTime = recipe.CookingTime;
            PersonCount = recipe.PersonCount;
            Favourites = recipe.Favourites;
            Photo = recipe.Photo;
            Likes = recipe.Likes;
            Steps = recipe.Steps;
            Tags = recipe.Tags;
            Ingredients = recipe.Ingredients;
        }
    }
}
