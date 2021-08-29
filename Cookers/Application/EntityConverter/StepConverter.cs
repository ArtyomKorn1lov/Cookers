using Application.Commands;
using Domain.Entity;

namespace Application.EntityConverter
{
    public class StepConverter
    {
        public static Step ToStepEntity( UpdateStepCommand step )
        {
            if ( step == null )
            {
                return null;
            }
            return new Step( step.Id, step.Name, step.Description );
        }
    }
}
