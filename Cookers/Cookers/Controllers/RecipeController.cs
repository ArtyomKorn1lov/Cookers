using Application.Services;
using Domain;
using Domain.Entity;
using Domain.Repositories;
using Infrastructure;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Web.Dto;
using Web.DtoConverter;

namespace Web.Controllers
{
    [Route( "api/[controller]" )]
    [ApiController]
    public class RecipeController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IRecipeService _recipeService;
        private const int _recipesCount = 3;

        public RecipeController( IUnitOfWork unitOfWork, IRecipeService recipeService )
        {
            _unitOfWork = unitOfWork;
            _recipeService = recipeService;
        }

        [HttpGet( "several" )]
        public List<RecipeDto> GetSeveralRecipes()
        {
            List<Recipe> recipes = _recipeService.GetLastCount( _recipesCount );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "seach" )]
        public List<RecipeDto> SeachRecipes( string name )
        {
            List<Recipe> recipes = _recipeService.SeachRecipes( name );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "tag" )]
        public List<RecipeDto> GetRecipeByTag( string tagName )
        {
            List<Recipe> recipes = _recipeService.GetRecipeByTag( tagName );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "day" )]
        public RecipeDto GetDayRecipe()
        {
            Recipe recipe = _recipeService.GetDayRecipe();
            return RecipeDtoConverter.ConvertToRecipeDto( recipe );
        }

        [HttpGet( "id" )]
        public RecipeDto GetRecipeById( int id )
        {
            Recipe recipe = _recipeService.Get( id );
            return RecipeDtoConverter.ConvertToRecipeDto( recipe );
        }

        [HttpPost]
        public void CreateRecipe( RecipeDto recipeDto )
        {
            Recipe recipe = RecipeDtoConverter.ConvertToRecipeEntity( recipeDto );
            _recipeService.Create( recipe );
        }

        [HttpPut]
        public void Update( RecipeDto recipeDto )
        {
            Recipe recipe = _recipeService.Get( recipeDto.Id );
            recipe.CopyFrom( RecipeDtoConverter.ConvertToRecipeEntity( recipeDto ) );
            _unitOfWork.Commit();
        }

        [HttpDelete]
        public void DeleteRecipe( int id )
        {
            _recipeService.Delete( id );
            _unitOfWork.Commit();
        }
    }
}
