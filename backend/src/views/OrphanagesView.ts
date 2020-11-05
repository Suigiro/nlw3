import Orphanage from "../models/Orphanage";
import ImagesView from "./ImagesView";

export default
{
    render(ophanage: Orphanage){
        return {
            id: ophanage.id,
            name: ophanage.name,
            latitude: ophanage.latitude,
            longitude: ophanage.longitude,
            about: ophanage.about,
            instructions: ophanage.instructions,
            opening_hours: ophanage.opening_hours,
            open_on_weekends: ophanage.open_on_weekends,
            images: ImagesView.renderMany(ophanage.images)
        };
    },
    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}