class CheckInSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :dog_park
  belongs_to :dog
end
