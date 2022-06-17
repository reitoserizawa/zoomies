class CheckIn < ApplicationRecord
  belongs_to :user
  belongs_to :dog_park
  belongs_to :dog
end
