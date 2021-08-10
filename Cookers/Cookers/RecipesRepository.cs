using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dto;

namespace Web
{
    public class RecipesRepository //Заглушка
    {
        public RecipeDto[] GetAll()
        {

            RecipeDto[] recipes = new RecipeDto[]
            {
                new RecipeDto
                {
                    Id = 4,
                    Name = "Тыквенный супчик на кокосовом молоке",
                    Description = "Если у вас осталась тыква, и вы не знаете что с ней сделать, то это решение для вас! Ароматный, согревающий суп-пюре на кокосовом молоке. Можно даже в Пост!",
                    Photo = "assets/images/pum_soup.png",
                    CookingTime = 35,
                    Peoples = 3,
                    Favourites = 4,
                    Likes = 15,
                },
                new RecipeDto
                {
                    Id = 5,
                    Name = "Тыквенный супчик на кокосовом молоке",
                    Description = "Если у вас осталась тыква, и вы не знаете что с ней сделать, то это решение для вас! Ароматный, согревающий суп-пюре на кокосовом молоке. Можно даже в Пост!",
                    Photo = "assets/images/pum_soup.png",
                    CookingTime = 35,
                    Peoples = 3,
                    Favourites = 4,
                    Likes = 15,
                },
            };

            return recipes;
        }
    }
}
