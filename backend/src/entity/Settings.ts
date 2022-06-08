import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("settings")
export class Settings {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 'Garden Games' })
    title: string

    @Column({ default: 'development' })
    cloudinaryDirectory: string

    @Column({default: '#3880ff'})
    primaryColor: string

    @Column({default: '#000'})
    textColor: string

    @Column({default: '#fff'})
    backgroundColor: string

    @Column({default: '#f7f7f7'})
    iconColor: string

    @Column({default: 'rgba(0,0,0,0)'})
    cardBackgroundColor: string

    @Column({default: '#000'})
    tableBorderColor: string

    @Column({default: 'rgba(0,0,0,0)'})
    menuBackgroundColor: string

}
