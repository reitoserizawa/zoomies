class CheckInsController < ApplicationController
    before_action :is_authorized?

    def index
        check_ins = CheckIn.all
        render json: check_ins, status: :ok
    end

    def show
        check_in = find_check_in
        render json: check_in, status: :ok
    end

    def create
        check_in = CheckIn.create!(check_in_params)
        render json: check_in, status: :created
    end

    def destroy
        check_in = find_check_in
        check_in.destroy
        head :no_content
    end

    private

    def check_in_params
        params.permit(:dog_id, :user_id, :dog_park_id,)
    end

    def find_check_in
        CheckIn.find(params[:id])
    end

end
