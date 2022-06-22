class Dog < ApplicationRecord
  belongs_to :user
  has_many :check_ins

  def self.same_owners owner_id
    self.all.where("user_id = #{owner_id}")
  end
end
