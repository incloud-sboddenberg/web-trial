<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180327113658 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE TABLE user_country (user_id INT NOT NULL, country_id INT NOT NULL, PRIMARY KEY(user_id, country_id))');
        $this->addSql('CREATE INDEX IDX_B7ED76CA76ED395 ON user_country (user_id)');
        $this->addSql('CREATE INDEX IDX_B7ED76CF92F3E70 ON user_country (country_id)');
        $this->addSql('ALTER TABLE user_country ADD CONSTRAINT FK_B7ED76CA76ED395 FOREIGN KEY (user_id) REFERENCES app_users (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_country ADD CONSTRAINT FK_B7ED76CF92F3E70 FOREIGN KEY (country_id) REFERENCES country (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE user_country');
    }
}
