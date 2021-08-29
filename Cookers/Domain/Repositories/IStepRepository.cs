using System.Collections.Generic;
using Domain.Entity;

namespace Domain.Repositories
{
    public interface IStepRepository
    {
        List<Step> GetByRecipeId( int id );
        Step Get( int id );
        void Update( Step item );
    }
}
