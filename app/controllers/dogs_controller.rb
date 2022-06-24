class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, status: :ok
    end

    def show
        dog = find_dog
        render json: dog, status: :ok
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    def update
        dog = find_dog
        dog.update!(dog_params)
        render json: dog, status: :ok
    end

    def destroy
        dog = find_dog
        dog.destroy
        head :no_content
    end


    private

    def dog_params
        params.permit(:name, :breed, :age, :size, :img, :user_id)
    end

    def find_dog
        Dog.find(params[:id])
    end
end
