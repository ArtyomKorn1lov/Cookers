using Application;
using Application.Commands;
using Application.Services;
using Domain.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Web.Dto;
using Web.DtoConverter;

namespace Web.Controllers
{
    [ApiController]
    [Route( "api/recipe" )]
    public class RecipeController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IRecipeService _recipeService;

        public RecipeController( IUnitOfWork unitOfWork, IRecipeService recipeService )
        {
            _unitOfWork = unitOfWork;
            _recipeService = recipeService;
        }

        [HttpGet( "by-count" )]
        public List<RecipeDto> GetLastRecipes( int count )
        {
            List<Recipe> recipes = _recipeService.GetLastCount( count );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "by-name" )]
        public List<RecipeDto> GetByName( string name )
        {
            List<Recipe> recipes = _recipeService.GetByName( name );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "by-tag" )]
        public List<RecipeDto> GetRecipeByTag( string tag )
        {
            List<Recipe> recipes = _recipeService.GetRecipeByTag( tag );
            if ( recipes == null )
            {
                return null;
            }
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "day" )]
        public RecipeDto RecipeOfDay()
        {
            Recipe recipe = _recipeService.GetRecipeOfDay();
            return RecipeDtoConverter.ConvertToRecipeDto( recipe );
        }

        [HttpGet]
        public RecipeDto GetRecipeById( int id )
        {
            Recipe recipe = _recipeService.Get( id );
            return RecipeDtoConverter.ConvertToRecipeDto( recipe );
        }

        [HttpPost]
        public void CreateRecipe( CreateRecipeCommandDto recipeDto )
        {
            CreateRecipeCommand recipe = RecipeCommandConverter.ConvertCreateRecipeCommand( recipeDto );
            _recipeService.Create( recipe );
        }

        [HttpPut]
        public void Update( UpdateRecipeCommandDto recipeDto )
        {
            UpdateRecipeCommand recipeCommand = RecipeCommandConverter.ConvertUpdateRecipeCommand( recipeDto );
            _recipeService.Update( recipeCommand );
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
