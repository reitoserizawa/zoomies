class User < ApplicationRecord
    has_secure_password

    has_many :check_ins
    has_many :dog_parks, through: :check_ins
    has_many :dogs, dependent: :destroy

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true, length: {minimum: 5}
    validates :password, presence: true, length: {minimum: 5}
end
