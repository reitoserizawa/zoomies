class CheckInSerializer < ActiveModel::Serializer
  attributes :id, :dog_id, :dog_park_id, :user_id

  belongs_to :user
  belongs_to :dog_park
  belongs_to :dog
end
