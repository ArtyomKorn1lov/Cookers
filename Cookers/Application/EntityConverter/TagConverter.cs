using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class TagConverter
    {
        public static Tag ToTagEntity( UpdateTagCommand tag )
        {
            if ( tag == null )
            {
                return null;
            }
            return new Tag
            {
                Name = tag.Name
            };
        }
    }
}
