class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :img, :active, :username, :password

  has_many :dogs
  has_many :dog_parks
end
