class DogParksController < ApplicationController
    def index
        dog_parks = DogPark.all
        render json: dog_parks, status: :ok
    end

    def show
        dog_park = find_dog_park
        render json: dog_park, status: :ok
    end

    private

    def find_dog_park
        DogPark.find(params[:id])
    end
end
