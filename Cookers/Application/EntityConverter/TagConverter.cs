using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class TagConverter
    {
        public static Tag ToTagEntity( UpdateTagCommand tag, int recipeId )
        {
            if ( tag == null )
            {
                return null;
            }
            return new Tag( tag.Id, tag.Name, recipeId );
        }
    }
}
