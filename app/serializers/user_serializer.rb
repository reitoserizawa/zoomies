class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :img, :active, :username, :password, :checked_in_status
  has_many :dogs
  has_many :dog_parks
  has_many :check_ins

  
end
