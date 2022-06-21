class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        current_user = User.find(session[:current_user])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:current_user] = user.id
            render json: user, status: 201
        else
            render json: { error: "Invalid user" }, status: 422
        end
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end


    private

    def user_params
        params.permit(:first_name, :last_name, :email, :img, :active, :username, :password, :password_confirmation)
    end

    def find_user
        User.find(params[:id])
    end

end

