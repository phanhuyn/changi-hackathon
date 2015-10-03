json.array!(@comments) do |comment|
  json.extract! comment, :id, :user, :content, :chat_box_id
  json.url comment_url(comment, format: :json)
end
