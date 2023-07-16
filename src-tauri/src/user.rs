use crate::{client::user, client::PrismaClient};

#[tauri::command(async)]
async fn login_user(username: String, password: String) -> () {
  let prisma_client: Result<PrismaClient, NewClientError> = client::new_client().await;
}
