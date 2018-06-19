class GameSerializer < ActiveModel::Serializer
  attributes :user, :time, :initial_board, :current_board, :completed

  def user
    UserSerializer.new(object.user, root: false)
  end
end
